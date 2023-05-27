import moment from 'moment'

const UtilityLibrary = {
    isObjectEmpty(object: object) {
        for (var i in object){
            if (object.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    },
    toHumanDateAndTime(date: string) {
        if (date) {
            return moment(date).format('MMMM Do, YYYY')
        }
    },
};

export default UtilityLibrary;