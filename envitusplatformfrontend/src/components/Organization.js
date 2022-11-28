import React, { useState } from 'react'

function Organization({ org }) {
    const [name,setName] = useState('')
    const deleteOrganization = async (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <div className="cardBx">
                <div style={{ float: "right" }}>
                    {/* <i className="fa fa-ellipsis-v m-2"></i> */}

                    <div class="dropdown dropleft">
                        <i
                            class="fa fa-ellipsis-v m-2"
                            type="button"
                            id="dropdownMenu2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        ></i>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                        >
                            <button class="dropdown-item" type="button" data-toggle="modal" data-target="#exampleModalCenter">
                                Edit
                            </button>
                            <button
                                class="dropdown-item"
                                type="button"
                                onClick={(e) => deleteOrganization(org.name)}
                            >
                                Delete
                            </button>
                        </div>
                    </div> 
                </div>
                <div className="text-center mt-5">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_pp19lwbku3OLDvTF3qHLT0mhVKgCYD8jQ&usqp=CAU"
                        className="w-25 mt-4"
                    />
                </div>
                <h3 className="org-name text-center" style={{ color: "#111" }}>{org.name}</h3>
                <p className="text-center" style={{ color: "#111" }}>{org.description}</p>
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Edit Organisation</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <p>Name</p>
                                <input type='text' className='form-control'/>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organization