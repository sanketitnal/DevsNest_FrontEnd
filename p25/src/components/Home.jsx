import { useState, useEffect } from 'react';

export default function Home() {
    let [newsArr, setNewsArr] = useState([]);

    useEffect(() => {
        fetch('https://gnews.io/api/v4/search?q=Indian%20Airforce&lang=en&token=54c8ae88054d595fd9ed6cab1abe96aa')
            .then(response => response.json())
            .then(response => setNewsArr(response.articles))
    }, [setNewsArr]);

  return (
    <>
        <div className="flex items-center pl-10 text-gray-300 text-xl md:text-3xl italic" style={{height: "75vh"}}>
            Touch the sky with Glory
        </div>
        <div className="bg-gray-100 p-5">
            <div className="text-2xl">
                News
            </div>
            <br/><hr/><br/>
            <div className="flex flex-row box-border flex-wrap p-px">
                {newsArr.map((news, index) => (<NewsBox key={String(Date.now()) + index} title={news.title} description={news.description} imageUrl={news.image} url={news.url}/>))}
            </div>
        </div>
    </>
  );
}

function NewsBox({title, description, imageUrl, url}) {
    return (
        <a href={url} target="blank" className="block mt-2 p-2 rounded-lg hover:shadow-2xl w-full md:w-1/2 border">
            <div className="text-md md:text-xl font-bold">{title}</div>
            <div className="flex flex-row pt-2 flex items-center">
                <div
                    style={{
                        minHeight: "125px",
                        minWidth: "125px",
                        maxHeight: "125px",
                        maxWidth: "125px",
                        backgroundImage: `url('${imageUrl}')`,
                        backgroundPosition: "center center",
                        backgroundSize: 'cover'
                    }}>
                </div>
                <div className="p-2 font-thin flex items-center text-sm md:text-base"
                    style={{height: "125px", overflow: "hidden"}}
                >{description + " ..."}</div>
            </div>
        </a>
    )
}