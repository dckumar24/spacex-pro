import { useQuery, gql } from "@apollo/client";

const GET_MISSIONS=gql`
    query {
        launches {
            launch_success
            launch_year
            mission_name
            details
            links {
                flickr_images
              }
              id
          }
    }
`

export const useMissions=()=>{
    const {data,loading,error}=useQuery(GET_MISSIONS);

    return {
        data,loading,error
    }
}


