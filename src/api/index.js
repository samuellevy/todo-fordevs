var rest = {
    url: "#",
    get(action){
        var url = this.url + action;
        var options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };
        return fetch(url, options).then((res) => res.json());
    }
};

export default rest;