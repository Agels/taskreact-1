// 171f08d6d2234a0480c7e4708d6e0eb6 : ardhianagilr
//5576511f5d8a4fbfa6f186306439f6e5 : kocnaj
//dbf82ff4b52d4ee39ea3e66623f033c8 : native
// const url = `https://newsapi.org/v2/everything?q=${wordsx}&popularity&language=${value}&apiKey=5576511f5d8a4fbfa6f186306439f6e5`;
// console.log(url)
//  fetch(url)
// .then(res => res.json())
// .then(data => setTimeout(()=>{
//     showNews(data.articles), 30000
// }))
// .catch(err => console.log(err))
// .finally(()=> 'loading')
const api_key = '171f08d6d2234a0480c7e4708d6e0eb6';

const getLanguage = (value)=>{

const search = document.getElementById('search');
    search.addEventListener('keyup', () => {
        const words = new Array(event.target.value);
            getApi(words, value)

    });
    const getApi = async (wordsx, value) => {
        const load = `<img src="img/loader.gif" class="mx-auto d-block" style="height:50px; width:50px;">`;
        document.getElementById('load').innerHTML += load;
        try {
            const res = await fetch(`https://newsapi.org/v2/everything?q=${wordsx}&popularity=popularity&language=${value}&apiKey=${api_key}`);
            const result = await res.json();
            const data = await result.articles;
            document.getElementById('load').style.display = "none";
            showNews(data);
        } catch (error) {
            document.getElementById('load').style.display = "none";
            document.getElementById('content').innerHTML += error.message;
        }
     
    }
}

const showNews =  (data) => {
    const container = document.getElementById('content');
     data.forEach(element => {
        const subs = element.description;
        const string = subs.substring(0, 120);
        const datax =
                    `<div class="card col-lg-4  ">
                         <img src="${element.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${string} .... <em>read more</em></p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`
      container.innerHTML += datax
    });
}
