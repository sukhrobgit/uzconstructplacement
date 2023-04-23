import React, { useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import UserProjectUpdateModal from "../pages/UserProjectUpdateModal";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { delProject } from "../actions/projectActions";
import ProjectDeleteModal from "./modals/ProjectDeleteModal";


function UserProjectsTable({ projects }) {
const dispatch = useDispatch()



  return (
    <>
      <h1>Projects</h1>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {projects?.map((project) => {
            return (
              <tr>
                <td>
                  <img src={project.image} alt="project image" />
                </td>
                <td>{project.title}</td>
                <td>
                  <div className="project-desc">{project.desc}</div>
                </td>
                <td>{project.projectInfo}</td>
                <td>{project.projectStatus}</td>

                <td>
                  <div className="project-btns">
                {/* userId, title, imgUrl, desc, location, projectStatus  */}

                        <UserProjectUpdateModal projectId={project._id} title={project.title} imgUrl={project.image} desc={project.desc} location={project.projectStatus} />
                        <ProjectDeleteModal projectId={project._id}/>


 {/*  */}
                  </div>
                </td>

              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default UserProjectsTable;
