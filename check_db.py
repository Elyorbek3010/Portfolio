import psycopg2
import os
from dotenv import load_dotenv

load_dotenv(r"c:\portfolio\backend\.env")

conn = psycopg2.connect(
    dbname=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    host=os.getenv("DB_HOST"),
    port=os.getenv("DB_PORT", "5432"),
    sslmode='require'
)
cur = conn.cursor()
cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public';")
tables = cur.fetchall()
print("Tables in DB:")
for t in tables:
    print(t[0])
