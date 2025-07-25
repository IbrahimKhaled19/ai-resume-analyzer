import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumaid" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  const {isLoading, auth} = usePuterStore();

    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();
    useEffect(() =>{
        if(!auth.isAuthenticated){
            navigate('/auth?next=/')

        }
    },[auth.isAuthenticated,next])
  return (
    <main className="bg-[url('/public/images/bg-main.svg')] bg-cover">
      <NavBar />
      <section className="main-section">
    <div className="page-heading py-16">
      <h1>Track Your Applications & Resume Ratings </h1>
      <h2>Review Your Submissions and Get AI-powered feedback</h2>
    </div>
  {resumes.length > 0 &&(

  <div className="resumes-section">
  {resumes.map((resume) => {
    return (
      <ResumeCard key={resume.id} resume={resume}/>
      );
      })}
  </div>
  )}
  </section>
    </main>
  )
}
