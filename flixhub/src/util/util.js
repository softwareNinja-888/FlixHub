const util = (function(){
    function capitilalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    function BackDrop(url) {
        const baseUrl ='https://image.tmdb.org/t/p/';
        const size = 'original'
        const backdropPath = url? `${baseUrl}${size}${url}` : ''


        return backdropPath
    }

    function summary(overview) {
        return overview.length > 150? overview.slice(0, 150) + '...' : overview;
    }

    return {capitilalize,BackDrop,summary}

})()

export {util};