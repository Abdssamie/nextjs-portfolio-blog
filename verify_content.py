from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Check Project Page
        print("Checking Project Page...")
        page.goto("http://localhost:3001/projects/open-source-video-editor")
        # Scroll down to ensure images load
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(2)
        page.screenshot(path="project_page.png", full_page=True)
        print("Project page screenshot saved.")

        # Check Blog List
        print("Checking Blog List...")
        page.goto("http://localhost:3001/blog")
        time.sleep(1)
        page.screenshot(path="blog_list.png", full_page=True)
        print("Blog list screenshot saved.")

        browser.close()

if __name__ == "__main__":
    run()
