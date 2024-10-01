import React from 'react';

export default function DashboardContent() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVj6nDTOTfaaJtEpv0lCC6v0HEfkiT7kB4GepNaQy8ejVoAb4V1BhHtA-xthq_J6ve4t0&usqp=CAU" alt="GDSC Logo" className="h-10 w-10 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">GDG IIT Bhilai</h1>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVj6nDTOTfaaJtEpv0lCC6v0HEfkiT7kB4GepNaQy8ejVoAb4V1BhHtA-xthq_J6ve4t0&usqp=CAU" alt="IIT Bhilai Logo" className="h-10 w-10" />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Nidhi Singh"
              role="GDSC Lead"
              image="https://drive.google.com/file/d/1V3SfUeqasYmoTrlVVHU4p6m5LuK3COLI/view?usp=drive_link"
              description="Passionate about technology and community building."
              isLead={true}
            />
            <TeamMember
              name="putla theophila"
              role="core member"
              image="https://drive.google.com/file/d/13YoURNseYKRCQADdJ2tMFRm3xJIUCwce/view?usp=drive_link"
              description="Expertise in web development and cloud technologies."
            />
            <TeamMember
              name="Vasu Garg"
              role="core member"
              image="https://drive.google.com/file/d/1yWOOJJpuX6-DCkG_Shn8ygliL4HmA6HF/view?usp=drive_link"
              description="Creative mind behind our visual identity."
            />
            <TeamMember
              name="Amay dixit"
              role="core member"
              image="https://drive.google.com/file/d/1YYtogEOpFCTDPlFHueLanDzYe6rjg0yw/view?usp=drive_link"
              description="Connecting GDSC with the student community."
            />
            <TeamMember
              name="Ashutosh kumar jha"
              role="core member"
              image="https://drive.google.com/file/d/1RshKhITX4Yl6cni28ttl2uRNv8XTLEAR/view?usp=drive_link"
              description="xploring the frontiers of artificial intelligence"
            />
            <TeamMember
              name="Arpan Goswami"
              role="core member"
              image="https://drive.google.com/file/d/1HIMPo3AV8y5j453Pjo64YZeO06Lwjom8/view?usp=drive_link"
              description="Exploring the frontiers of artificial intelligence."
            />
          </div>
        </div>

        {/* Past Events Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Past Events</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Google Dev Fest"
              date="March 15, 2023"
              description="Intensive workshop on Android app development using Kotlin."
            />
            <EventCard
              title="Cloud Computing Workshop"
              date="september 1, 2023"
              description="Hands-on session with Google Cloud Platform."
            />
            <EventCard
              title="Web Development Bootcamp"
              date="January 20, 2024"
              description="Three-day bootcamp covering HTML, CSS, and JavaScript."
            />
            <EventCard
              title="Machine Learning Seminar"
              date="December 5, 2023"
              description="Introduction to ML algorithms and TensorFlow."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function TeamMember({ name, role, image, description, isLead = false }) {
  return (
    <div className={`bg-white overflow-hidden shadow rounded-lg ${isLead ? 'col-span-full lg:col-span-3' : ''}`}>
      <div className="p-5">
        <div className="flex flex-col sm:flex-row items-center">
          <img className="h-32 w-32 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4" src={"https://brvminvestmentdays.com/wp-content/uploads/2024/04/person_placeholder.png"} alt={name} />
          <div className={`text-center sm:text-left ${isLead ? 'sm:flex-1' : ''}`}>
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-sm text-blue-600 font-semibold">{role}</p>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ title, date, description }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}