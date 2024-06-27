
document.getElementById("submit-data").addEventListener("click", async (event)  => {
    event.preventDefault();
    const query = document.getElementById("input-show").value;
    const showContainer = document.querySelector(".show-container");

    showContainer.innerHTML = '';

       {
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
            const data = await response.json();

            data.forEach(item => {
                const showData = document.createElement("div");
                showData.classList.add("show-data");

                const showImage = item.show.image && item.show.image.medium;
                const showTitle = item.show.name;
                const showSummary = item.show.summary;


                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

                showData.innerHTML = `
                    <img src="${showImage}">
                    <div class="show-info">
                        <h1>${showTitle}</h1>
                        ${showSummary}
                    </div>
                `;
                showContainer.appendChild(showData);
            });

        }   catch (error) {
        console.error("Error fetching data:", error);
        } 

    
    }     
    
    
});

