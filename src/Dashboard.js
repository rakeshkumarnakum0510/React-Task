

const Dashboard = () => {
    const items = JSON.parse(localStorage.getItem('name'));
return (
    <>
    <h1>Dashboard</h1>

===========================================================
    <h1>Hello <span style={{color:"blue"}}>{items}</span>  Welcome to the our Application </h1>

    </>
)


}

export default Dashboard;