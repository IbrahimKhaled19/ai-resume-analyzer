import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { useEffect , useState } from "react";
import { usePuterStore } from "~/lib/puter";
import { Link, useLocation, useNavigate } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumaid" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  const {isLoading, auth , kv } = usePuterStore();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();
    useEffect(() =>{
        if(!auth.isAuthenticated){
            navigate('/auth?next=/')

        }
    },[auth.isAuthenticated,next])

    useEffect(() => {
      const loadResumes = async ()=>{
        setLoadingResumes(true);
        const resumes = (await kv.list('resume:*',true)) as KVItem[];
        const parsedResumes = resumes?.map(
          (resume) => JSON.parse(resume.value) as Resume
        )
        console.log(parsedResumes);
        setResumes(parsedResumes);
        setLoadingResumes(false);
      }
      loadResumes();
    }, []);
  return (
    <main className="bg-[url('/public/images/bg-main.svg')] bg-cover">
      <NavBar />
      <section className="main-section">
    <div className="page-heading py-16">
      <h1>Track Your Applications & Resume Ratings </h1>
      {!loadingResumes && resumes.length ==0 ?(
        <h2>No Resumes Found. Upload your first resume to get feedback.</h2>
      ):(
        <h2>Review Your Submissions and Get AI-powered feedback</h2>
      )}
    </div>
    {isLoading &&(
      <div className="flex flex-col items-center justify-center">
        <img src="/images/resume-scan-2.gif" alt="" className="w-[200px]"/>
      </div>
    )}
  {!loadingResumes && resumes.length > 0 && (

  <div className="resumes-section">
  {resumes.map((resume) => {
    return (
      <ResumeCard key={resume.id} resume={resume}/>
      );
      })}
  </div>
  )}
  {!loadingResumes && resumes?.length ==0 && (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <Link to='/upload' className="primary-button w-fit text-xl font-semibold" >
      Upload Your Resume
      </Link>
    </div>
  )}
  </section>
    </main>
  )
}
