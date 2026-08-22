import requests
import time

url = "https://portfolio-backend-1k42.onrender.com/api/contact/"
headers = {
    "Origin": "https://portfolio-topaz-omega-74.vercel.app",
    "Content-Type": "application/json"
}
data = {
    "name": "Test User",
    "email": "test@example.com",
    "message": "Hello!"
}

for i in range(5):
    response = requests.post(url, json=data, headers=headers)
    print(f"Status: {response.status_code}")
    if "Internal Server Error" not in response.text[:200]:
        print(response.text[:2000])
        break
    else:
        print("Still plain 500...")
    time.sleep(15)
