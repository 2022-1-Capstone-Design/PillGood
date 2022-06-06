import sys
import io
import json
import test

if __name__ == "__main__":
    
    sys.stdout = io.TextIOWrapper(sys.stdout.flush())
    sys.stderr = io.TextIOWrapper(sys.stderr.flush())
    vString = sys.argv[1]
    vJson = json.loads(vString)
    newvJson = test.calc(vJson)
    print(newvJson)
    
