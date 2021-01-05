import React, {Component} from "react";

export default class Project extends Component{

    render() { 
        return (
            <div>
                
                <div class="proj-hover">
                    <div class="projects-title">
                        {this.props.proj_title}
                        <div class="project-date">
                            {this.props.proj_date}
                        </div>
                    </div>
                    <div class="projects">
                        <div class="project-img">
                            <img src={this.props.proj_img} />
                        </div>
                        <div class="project-text">
                            {this.props.proj_body}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}