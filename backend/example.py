import sys
import base64
import io
import json

if __name__ == "__main__":
    
    sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')
    vString = sys.argv[1]
    vJson = json.loads(vString)
    print("python test", vJson, type(vJson))
