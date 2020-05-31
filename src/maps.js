import openGoogle from './google';
import openYandex from './yandex';


const openAllMaps = () => {
    return (
       openGoogle();
       openYandex();
    );
};

export default openAllMaps;