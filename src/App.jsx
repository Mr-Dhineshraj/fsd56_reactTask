
import Card from "./components/Card"
function App(){


  const cardData=[
    {
    package:"FREE",
    value:"$0",
    duration:"/month",
    user:"Single User",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    PublicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    access:"Community Access",
    isAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:false,
    support:"Dedicated Phone Support",
    isSupport:false,
    subdomain:"Free Subdomain",
    isSubdomain:false,
    reports:"Monthly Status Reports",
    isreports:false
    
  },
  {
    package:"PLUS",
    value:"$9",
    duration:"/month",
    user:"5 Users",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    PublicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    access:"Community Access",
    isAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isreports:false
    
    
  },
  {
    package:"PRO",
    value:"$49",
    duration:"/month",
    user:"Unlimited Users",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    PublicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    access:"Community Access",
    isAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isreports:true
    
  }
]

return<>

<section className="pricing py-5">
  <div className="container">
    <div className="row">
 
{
  cardData.map((e,i)=>{
    return <Card data={e} key={i}/>
  })

  }

    </div>
  </div>
</section>

</>


}




export default App