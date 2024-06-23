import JobLIstings from "../Components/JobLIstings"

const JobPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobLIstings isHome={true}/>
    </section>
  )
}

export default JobPage