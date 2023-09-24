import url from "./url"
import {redirect} from "react-router-dom"

// create new action
export const createAction = async({request}) => {
    const fromData = await request.formData();

    const newJob = {
        position: formData.get("position"),
        company_name: formData.get("company_name"),
        job_description: formData.get("job_description"),
        applied: formData.get("applied"),
        type_of_resume_sent: formData.get("type_of_resume_sent"),
        date_applied: formData.get("date_applied"),
        hiring_manager: formData.get("hiring_manager"),
        hiring_manager_email: formData.get("hiring_manager_email"),
        hiring_manager_phone: formData.get("hiring_manager_phone"),
        interview_status: formData.get("interview_status"),
        application_origin: formData.get("application_origin"),
        thankyou_sent: formData.get("thankyou_sent")
    }

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJob)
    })

        return redirect("/")
}

// update action
export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updatedJob = {
        position: formData.get("position"),
        company_name: formData.get("company_name"),
        job_description: formData.get("job_description"),
        applied: formData.get("applied"),
        type_of_resume_sent: formData.get("type_of_resume_sent"),
        date_applied: formData.get("date_applied"),
        hiring_manager: formData.get("hiring_manager"),
        hiring_manager_email: formData.get("hiring_manager_email"),
        hiring_manager_phone: formData.get("hiring_manager_phone"),
        interview_status: formData.get("interview_status"),
        application_origin: formData.get("application_origin"),
        thankyou_sent: formData.get("thankyou_sent")
    }

    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedJob)
    })

        return redirect("/post/${id}")
}

// Delete action
export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })
    return redirect("/")
}