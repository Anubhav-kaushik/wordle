import json


def main():
    """
    Main function
    """
    with open("data.json", "r") as f:
        data = json.load(f)

    print(data)