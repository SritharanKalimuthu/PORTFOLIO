import './academic.css'

const school = [
    {
      id:1,
      icon:'book',
      qualification:'SSLC',
      name : 'Selection Matric Higher Secondary School.',
      place: 'Aranthangi - 614616',
      year:'2017-2018',
      percentage:'92.2%',
    },
    {
      id:2,
      icon:'book',
      qualification:'HSC',
      name : 'Selection Matric Higher Secondary School.',
      place: 'Aranthangi - 614616',
      year:'2019-2020',
      percentage:'74.4%',
    },{
      id:3,
      icon:'school',
      qualification:'Information Technology',
      branch:'B.Tech',
      name : 'Pavendar Bharathidasan College of Engineering and Technology.',
      place: 'Tiruchirapalli - 620024',
      year:'2020-2024',
      percentage:'GCPA - 8.10',
    },
]

const Container = (props)=>{
    return <div className={`school-container scon${props.id}`}>
      <div className="text-box">
          <p className='year'>{props.year}</p>
          <h1>{props.name}</h1>
          <p className='place'>{props.place}</p>
          <p className='branch'>{props.branch}</p>
          <h2>{props.qualification} - {props.percentage}</h2>
      </div>
      <ion-icon name={props.icon}></ion-icon>
    </div>
}

function School(){
    return <div className='timeline'>
        {school.map((school)=>{
          return <Container {...school} key={school.id}/>
        })}
    </div>
}

export default School