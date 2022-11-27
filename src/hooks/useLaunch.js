import { useQuery, gql } from "@apollo/client";

const GET_MISSION=gql`
    query GetLaunch($id:ID!){
        launch(id: $id) {
            id
            launch_year
            launch_success
            links {
              flickr_images
            }
            mission_name
            details
          }
    }
`;

export const useLaunch=(id)=>{
    const {data,loading,error}=useQuery(GET_MISSION,{
        variables:{
            id
        }
    });

    return {
        data,loading,error
    }
}





