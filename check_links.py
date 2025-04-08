import os
from bs4 import BeautifulSoup
import requests
from urllib.parse import urljoin

base_dir = "."  

def check_local_links(base_dir):
    print(f"🔍 Scanning folder: {base_dir}")
    for root, _, files in os.walk(base_dir):
        print(f"📁 Found folder: {root}")
        for file in files:
            if file.endswith(".html"):
                print(f"🔎 Found HTML file: {file}")
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    soup = BeautifulSoup(f, "html.parser")
                    links = soup.find_all("a")
                    for link in links:
                        href = link.get("href")
                        # Skip anchors, mailto, phone numbers, and javascript links
                        if not href or href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:") or href.startswith("javascript:"):
                            continue

                        if href.startswith("http"):
                            try:
                                res = requests.head(href, allow_redirects=True, timeout=5)
                                if res.status_code >= 400:
                                    print(f"❌ Broken external link: {href} (Status code: {res.status_code})")
                                else:
                                    print(f"✅ Valid external link: {href}")
                            except Exception as e:
                                print(f"⚠️ Error checking external link: {href} ({e})")
                        else:
                            linked_file_path = os.path.normpath(os.path.join(root, href))
                            if not os.path.exists(linked_file_path):
                                print(f"❌ Missing local link: {href}")
                            else:
                                print(f"✅ Local link exists: {href}")

check_local_links(base_dir)
