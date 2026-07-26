/*function findAdminById(adminId, callback) {
  setTimeout(() => {
    if (!adminId) {
      callback(new Error('Admin id is required'));
      return;
    }

    const admin = [{ id: adminId, name: 'Sample Admin' }];
    callback(null, admin[0]);
  }, 1000);
}

findAdminById(null, function (error, admin) {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Admin found:', admin);
  }
});
*/


//-----------------------------------------------------------


/*
function findAdminById(adminId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!adminId)reject(new Error('Admin id num is required'));
            resolve({adminId, jobTitle: "regualar Admin"});
        },1000);
    })
}

findAdminById(5)
.then(admin => console.log(admin.jobTitle))
.catch(error => console.error(error.message));
*/

//-----------------------------------------------------------

function getCourseById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) reject(new Error('Course ID is required'));
      resolve({ id, title: 'React Basics', applicants: 105 });
    }, 600);
  });
}

getCourseById('c2')
  .then(course => console.log(course.title))
  .catch(error => console.error(error.message));

function checkApplicantsLimit(course) {
  if (course.applicants >= 100) {
    throw new Error('all done no available seats');
  }
  return true;
}

async function displayCourseDetails(courseId) {
  try {
    const course = await getCourseById(courseId);
    checkApplicantsLimit(course);
    console.log('Course Name:', course.title);
    console.log('Applicants:', course.applicants);
  } catch (error) {
    console.error('Cannot load course details:', error.message);
  }
}

displayCourseDetails('c2');