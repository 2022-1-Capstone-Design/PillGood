import sys
import io
import json
import test

if __name__ == "__main__":
    
    sys.stdout = io.TextIOWrapper(sys.stdout.reconfigure(encoding='utf-8'))
    sys.stderr = io.TextIOWrapper(sys.stderr.reconfigure(encoding='utf-8'))
    vString = sys.argv[1]
    vJson = json.loads(vString)
    newvJson = test.calc(vJson)
    print(newvJson)
    
