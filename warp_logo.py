import cv2
import numpy as np
from PIL import Image, ImageEnhance

# 1. Load Background
bg_pil = Image.open('public/images/hero_inner_aftersales_v2.jpg').convert('RGBA')
bg_w, bg_h = bg_pil.size

# 2. Load Logo
logo_pil = Image.open('public/images/logo03.png').convert('RGBA')
# Make logo white
r, g, b, a = logo_pil.split()
logo_white = Image.merge('RGBA', (Image.new('L', logo_pil.size, 240), Image.new('L', logo_pil.size, 240), Image.new('L', logo_pil.size, 240), a))
logo_w, logo_h = logo_white.size

# Convert to CV2
logo_cv = np.array(logo_white)
logo_cv = cv2.cvtColor(logo_cv, cv2.COLOR_RGBA2BGRA)

# Define source points
pts_src = np.array([
    [0, 0],
    [logo_w, 0],
    [logo_w, logo_h],
    [0, logo_h]
], dtype=float)

# Define destination points
pts_dst = np.array([
    [120, 390],
    [400, 410],
    [400, 560],
    [120, 490]
], dtype=float)

h_mat, status = cv2.findHomography(pts_src, pts_dst)
warped_logo_cv = cv2.warpPerspective(logo_cv, h_mat, (bg_w, bg_h))
warped_logo_pil = Image.fromarray(cv2.cvtColor(warped_logo_cv, cv2.COLOR_BGRA2RGBA))

# Adjust opacity to 90%
alpha = warped_logo_pil.split()[3]
alpha = ImageEnhance.Brightness(alpha).enhance(0.9)
warped_logo_pil.putalpha(alpha)

final_img = Image.alpha_composite(bg_pil, warped_logo_pil)
final_img.convert('RGB').save('public/images/hero_inner_aftersales_final.jpg', quality=95)
print("Image saved successfully.")
