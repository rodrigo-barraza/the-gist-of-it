import FetchApiWrapper from '../wrappers/FetchApiWrapper';

const GistApiLibrary = {
    RODRIGO_SERVICE: 'https://api.github.com/',
    USERS: 'users/',
    GISTS: 'gists/',

    async getUsernameGists(username) {
        const method = 'GET';
        let url = `${this.RODRIGO_SERVICE}${this.USERS}/${username}/gists`;
        const headers = new Headers({})
        const body = {}
        const searchParams = new URLSearchParams({})
        return await FetchApiWrapper.fetch(method, url, headers, body, searchParams)
    },
    async getGistForks(gistId) {
        const method = 'GET';
        let url = `${this.RODRIGO_SERVICE}${this.GISTS}/${gistId}/forks`;
        const headers = new Headers({})
        const body = {}
        const searchParams = new URLSearchParams({})
        return await FetchApiWrapper.fetch(method, url, headers, body, searchParams)
    },

    // async deleteLike(renderId, like) {
    //     const method = 'POST';
    //     let url = `${this.RODRIGO_SERVICE}${this.FAVORITE_SERVICE}/like`;
    //     const headers = new Headers({})
    //     const body = {}
    //     const searchParams = new URLSearchParams({})
    //     if (renderId) { Object.assign(body, { renderId: renderId }) }
    //     if (like) { Object.assign(body, { like: 'false' }) }
    //     return await FetchApiWrapper.fetch(method, url, headers, body, searchParams)
    // },
};

export default GistApiLibrary;
