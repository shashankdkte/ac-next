import { useRouter } from "next/router";
function ClientPage()
{
  const router = useRouter();
  console.log(router.query);
  function loadProjectHandler() {
    router.replace("/clients/max/projecta");
    // router.push({
    //   pathname: "/clients/[id]/[clientprojectid]",
    //   query: {
    //     id:"max" , clientprojectid:"projectaid"
    //   }
    // })
}

  return <div>
    <h2>ClientPage</h2>
   <button onClick={loadProjectHandler}>Load Project</button>
  </div>
}

export default ClientPage; 