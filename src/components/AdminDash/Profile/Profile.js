import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  PseudoLink,
  ContentWrapper,
  ContentTitle,
  AppProgress,
  ActivityContainer,
  ActivityList,
  ActivityCard,
  Activity,
  AppStatus,
  ProfileContainer,
  Submit,
  Approve,
  BtnContainer,
} from './profileStyles'
import Navigation from '../Navigation/Navigation'
import Header from './Header'
import axiosWithAuth from '../../../utils/axios/axiosWithAuth'
import { useDispatch, useSelector } from 'react-redux'
import { getMemberById } from '../../../redux/thunks/memThunks'

const ProfileActivity = () => (
  <ActivityContainer>
    <ContentTitle>Activity</ContentTitle>
    <ActivityList>
      <ActivityCard>
        <Activity>Application approved.</Activity>
      </ActivityCard>
      <ActivityCard>
        <Activity>Application received.</Activity>
      </ActivityCard>
    </ActivityList>
  </ActivityContainer>
)

const Profile = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { selectedMember } = useSelector(state => state.mem)
  const [app, setApp] = useState(null)
  const [appVisible, setAppVisible] = useState(false)

  useEffect(() => {
    dispatch(getMemberById(id))
    axiosWithAuth()
      .get(`/application/${id}`)
      .then(res => setApp(res.data))
      .catch(err => console.log(err))
  }, [dispatch, id])

  const viewApp = () => {
    setAppVisible(!appVisible)
  }

  const changeAppStatus = status => {
    axiosWithAuth()
      .put(`/application/${id}`, { newStatus: status })
      .then(res => setApp(res.data))
      .catch(err => console.log(err.response.data))
  }

  return (
    <>
      <Navigation />
      <ProfileContainer>
        <Header user={selectedMember} />
        <ContentWrapper>
          <AppProgress>
            <ContentTitle>Application Progress</ContentTitle>
            <AppStatus>
              <p>
                {selectedMember.type === 'families'
                  ? `${selectedMember.first_name}'s training needs to be completed.`
                  : app?.app_status === 1
                  ? `${selectedMember.first_name}'s application needs to be approved.`
                  : app?.app_status === 2
                  ? `${selectedMember.first_name}'s application has been approved, and a background check needs to be completed.`
                  : app?.app_status === 3
                  ? `${selectedMember.first_name}'s application has been denied.`
                  : null}
              </p>
              {app && (
                <PseudoLink onClick={viewApp}>View Application</PseudoLink>
              )}
              {app && appVisible && (
                <>
                  <h4>How did you hear about us?</h4>
                  {app.app_q1_a?.option_1 && (
                    <p>Referral from a friend or family</p>
                  )}
                  {app.app_q1_a?.option_2 && <p>Social Media platform</p>}
                  {app.app_q1_a?.option_3 && <p>Radio Station</p>}
                  {app.app_q1_a?.option_4 && (
                    <p>Current Foster Together member</p>
                  )}
                  <h4>Can you give us the name of the person or platform?</h4>
                  <p>{app.app_q1_b ? app.app_q1_b : 'No answer'}</p>
                  <h4>How do you see yourself helping?</h4>
                  {app.app_q2?.option_1 && (
                    <p>Babysitting for a foster family</p>
                  )}
                  {app.app_q2?.option_2 && (
                    <p>Driving a child to activities and appointments</p>
                  )}
                  {app.app_q2?.option_3 && (
                    <p>Dropping a meal off to a foster family</p>
                  )}
                  {app.app_q2?.option_4 && (
                    <p>Donating new/gently used clothes, toys, supplies</p>
                  )}
                  {app.app_q2?.option_5 && (
                    <p>Delivering a package of clothes, toys, supplies</p>
                  )}
                  <h4>
                    Because sexual abuse by a friend or relative is a high risk,
                    Foster Together seeks to lead the way in deterring abusers.
                    We teach families and volunteers the red flags and how to
                    prevent & report sexual abuse. Are you willing to serve a
                    family aware of these safeguards? *
                  </h4>
                  <p>
                    {app.app_q3
                      ? `Yes, I’m willing to adhere to and enforce sexual abuse prevention and foster home rules and guidelines.`
                      : 'No, I WILL NOT adhere to or enforce sexual abuse prevention and foster home rules and guidelines.'}
                  </p>
                  <h4>
                    Foster care is meant to be temporary. After their parents
                    work to create a safe home, 60% of kids in Colorado foster
                    care go home to mom or dad. It's important to give kids and
                    families continuous support, including after the kids go
                    home to their family of origin. Are you open to supporting a
                    family whose children have been sent home post-foster care?
                  </h4>
                  <p>
                    {app.app_q4 === 1
                      ? `Yes, I'm open to supporting a family whose children have been sent home post-foster care`
                      : app.app_q4 === 2
                      ? `No, I'd prefer to just work with foster families.`
                      : app.app_q4 === 3
                      ? `Maybe, if I can get training on how to be most helpful to these families I’m open to supporting that family.`
                      : 'No answer'}
                  </p>
                  <h4>
                    Tell us about your experience with, or knowledge of,
                    supporting kids and families of any kind. What gifts and
                    qualities do you bring to this work?
                  </h4>
                  <p>{app.app_q5 ? app.app_q5 : 'No answer'}</p>
                  <h4>
                    Do you hold any certifications or licenses relevant to child
                    care and safety that you feel could be of help to how you
                    support as a Foster Neighbor?
                  </h4>
                  {app.app_q6_a ? (
                    <>
                      <p>
                        Yes, I have certifications/licenses relevant to child
                        care and safety that I believe would be helpful in
                        supporting a family.
                      </p>
                      <ul>
                        {app.app_q6_b.answer_a && (
                          <li>{app.app_q6_b.answer_a}</li>
                        )}
                        {app.app_q6_b.answer_b && (
                          <li>{app.app_q6_b.answer_b}</li>
                        )}
                        {app.app_q6_b.answer_c && (
                          <li>{app.app_q6_b.answer_c}</li>
                        )}
                      </ul>
                    </>
                  ) : (
                    <p>
                      No, I DO NOT have certifications/licenses relevant to
                      child care and safety that I believe would be helpful in
                      supporting a family.
                    </p>
                  )}
                  {app?.app_status === 1 && (
                    <BtnContainer>
                      <Approve onClick={() => changeAppStatus(2)}>
                        Approve
                      </Approve>
                      <Submit onClick={() => changeAppStatus(3)}>
                        Decline
                      </Submit>
                    </BtnContainer>
                  )}
                </>
              )}
            </AppStatus>
          </AppProgress>
        </ContentWrapper>
      </ProfileContainer>
    </>
  )
}

export default Profile
