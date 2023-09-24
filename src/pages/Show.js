import {Link, useLoaderData} from 'react-router-dom';

function Show (props) {
    const post = useLoaderData()

    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }

    return <div style={div}>
        <h1>{post.position}</h1>
        <h2>{post.company_name}</h2>
        <h2>{post.job_description}</h2>
        <h2>{post.applied}</h2>
        <h2>{post.type_of_resume_sent}</h2>
        <h2>{post.date_applied}</h2>
        <h2>{post.hiring_manager}</h2>
        <h2>{post.hiring_manager_email}</h2>
        <h2>{post.hiring_manager_phone}</h2>
        <h2>{post.interview_status}</h2>
        <h2>{post.application_origin}</h2>
        <h2>{post.thankyou_sent}</h2>
        <Link to ="/">Back to Index</Link>
    </div>
}

export default Show;