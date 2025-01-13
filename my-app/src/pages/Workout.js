import React from 'react'


function Workout() {
    const chartProps = {
        width: 600,
        height: 300,
      };
  return (
    <div className='container-fluid'>
      <h1 style={{fontFamily:'revert-layer'}}> Workout</h1>
      <div class="grid text-center">
  <div class="g-col-6">



 


</div>
  <div class="g-col-6">
  <div class="card" style={{width:" 18rem;"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
  </div>
</div>
    </div>
  )
}

export default Workout
