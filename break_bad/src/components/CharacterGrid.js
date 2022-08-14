import React from 'react'

export default function CharacterGrid({item,loading}) {
console.log(item)
    
  return (
    
    <div class="cardcss">
        {loading?<h1>Is Loading...</h1>:
item.map(item=>(
    <div class="card">
		<figure class="card__thumb">
			<img src={item.img} alt="" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">{item.name}</h2>
				<p class="card__snippet">
Known as {item.nickname}. profession {item.occupation[0]}. Portrayed by {item.portrayed} is actually {item.status}

                </p>
			
			</figcaption>
		</figure>
	</div>
))
        }
	
    </div>
  )
}
