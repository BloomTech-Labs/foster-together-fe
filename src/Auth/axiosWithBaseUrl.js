import axios from 'axios'
export const axiosWithBaseURL = () =>
  axios.create({
    baseURL: 'http://fostertogether-mmaws.us-west-2.elasticbeanstalk.com/api/',
  })
