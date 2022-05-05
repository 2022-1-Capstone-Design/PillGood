import sys
import base64
import io
import json

if __name__ == "__main__":
    
    sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')
    vString = sys.argv[1]
    result = {
        "혈관/혈액순환": [[1, 2, 3], [4,5,6]]
    }
    vJson = json.loads(vString)
    print("dict = ", result)