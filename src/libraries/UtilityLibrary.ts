const UtilityLibrary = {
    isObjectEmpty(object: object) {
        for (var i in object){
            if (object.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    },
};

export default UtilityLibrary;