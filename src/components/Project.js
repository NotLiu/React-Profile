import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div>
        <div class="proj-hover">
          <div class="projects-title">
            {this.props.proj_title}
            <div class="project-date">{this.props.proj_date}</div>
          </div>
          <div class="projects">
            <div class="project-img">
              {this.props.proj_img ? (
                <img src={this.props.proj_img} />
              ) : this.props.proj_iframe ? (
                <iframe src={this.props.proj_iframe} style={{ width: "100%", height: "35rem" }} />
              ) : (
                ""
              )}
            </div>
            <div class="project-text">{this.props.proj_body}</div>
          </div>
        </div>
      </div>
    );
  }
}
