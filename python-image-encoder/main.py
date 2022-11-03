import blurhash
import os
import simplejson


# image_dir_path = os.path.join(__file__, "..", "public/images/")
main_dir_name = os.path.dirname(os.path.dirname(__file__))
images_dir_path = os.path.join(main_dir_name, "public/images")

img_hash_dir = {}
for img in os.listdir(images_dir_path):
    if img.endswith((".jpg", ".png")):
        img_path = os.path.join(images_dir_path, img)
        img_hash = blurhash.encode(img_path, x_components=4, y_components=3)
        img_hash_dir[img] = img_hash


with open(f"{images_dir_path}/hashes.json", "w+") as f:
    f.write(simplejson.dumps(img_hash_dir, indent=4))
