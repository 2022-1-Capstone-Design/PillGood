import sys
import io
import json
import test
import codecs

if __name__ == "__main__":
    
    sys.stdout = io.TextIOWrapper(codecs.getwriter("utf-8")(sys.stdout.detach()))
    sys.stderr = io.TextIOWrapper(codecs.getwriter("utf-8")(sys.stderr.detach()))
    vString = sys.argv[1]
    vJson = json.loads(vString)
    newvJson = test.calc(vJson)
    print(newvJson)
    
