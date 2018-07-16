import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { formatAmount } from '../helpers/format_amount'

export class ProjectTeaser extends React.Component {
  handleClick = (event) => {
    this.props.onClick && this.props.onClick(event, this.props.project)
  }

  get href() {
    return this.props.href || this.props.project.links.find(link => link.rel == 'platform').href
  }

  get projectImageUrl() {
    const link = this.props.project.profile_picture.links.find(link => link.rel == 'fill_410x214')
    return link && link.href
  }

  get orgaImageUrl() {
    const link = this.props.project.carrier.picture.links.find(link => link.rel == 'fill_100x100')
    return link && link.href
  }

  get openAmount() {
    return formatAmount({cents: this.props.project.open_amount_in_cents})
  }

  render() {
    const project = this.props.project

    return (
      <Wrapper
        title={project.title}
        onClick={this.handleClick}
        className={this.props.className}
        href={this.href}
        target='_parent'
        font={this.props.font}
        showDescription={this.props.showDescription}
      >
        { this.props.children /* mount point, e.g. for injecting VisibilitySensor */ }

        <ProfilePicture src={ this.projectImageUrl } alt={ project.title } />

        <Title dangerouslySetInnerHTML={ { __html: project.title } } />
        { this.props.showDescription && <Description dangerouslySetInnerHTML={ { __html: project.description } } /> }

        <Divider>
         <FactList>
           <div><span>{ project.city },</span> { project.country }</div>
           <div><span>{ project.donations_count }</span> { I18n.t('bp_project_teaser.values_donor_count') }</div>
           <div><span>{ this.openAmount }</span> { I18n.t('bp_project_teaser.values_open_amount_in_cents') }</div>
         </FactList>
         <CarrierLogo src={ this.orgaImageUrl } alt={ project.carrier.name } />
        </Divider>

        <Progress color={ this.props.progressbarColor } value={ project.progress_percentage }>
          <div className='bar'></div>
        </Progress>
      </Wrapper>
    )
  }
}

ProjectTeaser.propTypes = {
  className:        PropTypes.string,
  font:             PropTypes.string,
  textColor:        PropTypes.string,
  href:             PropTypes.string,
  onClick:          PropTypes.func,
  progressbarColor: PropTypes.string,
  project:          PropTypes.object.isRequired,
  showDescription:  PropTypes.bool
}

const Wrapper = styled.a`
  cursor: pointer;
  font-family: ${ props => props.font ? props.font : '"Open Sans", Arial, sans-serif' };
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  textColor: ${ props => props.textColor ? props.textColor : '#636b70' };
  font-weight: 300;
  height: ${ props => props.showDescription ? '406px' : '319px' };
  box-sizing: border-box;
  transition: 0.15s box-shadow ease-out;

  @media (max-width: 767px) {
    width: 100%;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    color: #636b70;
  }
`

const Title = styled.h2`
  display: block;
  margin: 10px;
  font-size: 17px;
  line-height: 20px;
  height: 41px;
  color: #3f3f3f;
  font-weight: bold;
  overflow: hidden;
`

const Description = styled.div`
  position: relative;
  height: 71px;
  overflow: hidden;
  padding: 0 13px;
  font-size: 14px;
  line-height: 18px;
  color: #6a6a6a;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 18px;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  }
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 10px;
`

const FactList = styled.div`
  font-size: 14px;
  line-height: 22px;
  padding-left: 13px;
  width: calc(100% - 100px);

  > div {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    > span {
      font-weight: bold;
    }
  }
`

const CarrierLogo = styled.img`
  width: 65px;
  height: 65px;
  margin-right: 13px;
`

const Progress = styled.div`
  background-color: #eee;
  height: 10px;
  width: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow: hidden;

  > div {
    width: ${props => props.value}%;
    background: ${ props => props.color || 'red' };
    transition: width 0.2s linear;
    height: 100%;
  }
`

const ProfilePicture = styled.div`
	background: url(${props => props.src});
  height: 150px;
  background-size: cover;
`;
