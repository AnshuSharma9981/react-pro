
// import './App.css'
import { Bookmark } from 'lucide-react';
import Card from './assets/components/Card';
import ProfileCard from './assets/components/ProfileCard';

function App() {

  const jobOpening = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: 65,
    location: "London, United Kingdom"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: 72,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: 90,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Data Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: 95,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s",
    companyName: "Google",
    datePosted: "8 days ago",
    post: "Site Reliability Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: 80,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Support Engineer",
    tag1: "Part time",
    tag2: "Junior level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    datePosted: "4 weeks ago",
    post: "GPU Software Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: 110,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GYDIvxL-beJ8TFMwamtsRNTKncCUMcXNdA&s",
    companyName: "Tesla",
    datePosted: "1 week ago",
    post: "Autopilot Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: 88,
    location: "Palo Alto, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsDJdEKuo_WLMTGOGSp6gvOJmtYc1PRrI8A&s",
    companyName: "Oracle",
    datePosted: "9 days ago",
    post: "Database Administrator",
    tag1: "Part time",
    tag2: "Senior level",
    pay: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://companieslogo.com/img/orig/AVGO-ceb477a4.png?t=1722952492",
    companyName: "Broadcom",
    datePosted: "5 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: 85,
    location: "Singapore"
  }
];

  return ( 
    <>
      <ProfileCard />
    </>
  )
}

export default App


/*
<div className='parent' > 

      {jobOpening.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} location={elem.location} tag2={elem.tag2} pay={elem.pay} logo={elem.brandLogo}/>
      
        </div>
        })}
    </div>
*/