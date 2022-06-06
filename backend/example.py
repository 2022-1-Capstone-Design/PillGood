import sys
import io
import json
import test

if __name__ == "__main__":
    
    sys.stdout = io.TextIOWrapper(sys.stdout.readlines())
    sys.stderr = io.TextIOWrapper(sys.stderr.readlines())
    vString = sys.argv[1]
    vJson = json.loads(vString)
    newvJson = test.calc(vJson)
    print(newvJson)
    
