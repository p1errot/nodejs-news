const getUsers = async () => {
  console.log('Fetching users...');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log('Total users fetched:', users.length);
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
