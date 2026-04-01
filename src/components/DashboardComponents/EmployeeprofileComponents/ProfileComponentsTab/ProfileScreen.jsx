import React, { useState } from "react";

// =========================
// COMMON STYLES
// =========================
const styles = {
  page: "space-y-6",
  gridLayout: "grid grid-cols-1 md:grid-cols-2 gap-6",

  card: "bg-white border border-gray-200 rounded-md",
  cardHeader:
    "flex justify-between items-center border-b px-4 py-2 border-gray-200",
  cardBody: "px-4 py-4",
  cardBodyGrid: "grid grid-cols-2 gap-y-4 gap-x-10",

  title: "text-sm font-medium text-gray-700",
  editButton: "text-xs text-blue-500 hover:text-blue-700",
  saveButton:
    "text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600",
  cancelButton:
    "text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 ml-2",

  label: "text-[10px] uppercase text-gray-400 tracking-wide",
  value: "text-sm text-gray-800",
  subText: "text-sm text-gray-600",

  input:
    "w-full border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400",

  progressWrapper: "bg-white border border-gray-200 rounded-md",
  progressHeader: "px-4 py-3 flex items-center justify-between",
  progressInner: "flex items-center gap-4 w-full",
  progressBarBg: "w-[200px] bg-gray-200 h-2 rounded",
  progressBarFill: "bg-red-400 h-2 rounded",
  progressPercent: "text-sm text-red-500 font-medium",
  noteText: "text-xs text-gray-500",
};

// =========================
// DUMMY INITIAL DATA
// =========================
const initialEmployeeData = {
  completion: 85,

  primaryDetails: {
    firstName: "Marie",
    middleName: "",
    lastName: "Curie",
    displayName: "Marie Curie",
    gender: "Female",
    dob: "13 Oct 1989",
  },

  contactDetails: {
    workEmail: "abc@gmail.com",
    personalEmail: "",
    mobile: "9876543210",
    workPhone: "",
  },

  address: {
    city: "Nashik",
    state: "Maharashtra",
    country: "India",
    pincode: "422001",
  },

  experience: {
    experience: "2 Years 3 Months",
  },

  professionalSummary: {
    summary: "Passionate frontend developer with React experience.",
  },

  education: {
    education: "B.Tech Computer Science",
  },

  identityInformation: {
    aadhar: "XXXX-1234",
    pan: "ABCDE1234F",
  },
};

export default function ProfileScreen() {
  const [employeeData, setEmployeeData] = useState(initialEmployeeData);

  // =========================
  // DIFFERENT SAVE FUNCTIONS
  // (later replace with real APIs)
  // =========================

  const handlePrimarySave = (updatedData) => {
    console.log("Primary Details Save Endpoint", updatedData);

    setEmployeeData((prev) => ({
      ...prev,
      primaryDetails: updatedData,
    }));
  };

  const handleContactSave = (updatedData) => {
    console.log("Contact Details Save Endpoint", updatedData);

    setEmployeeData((prev) => ({
      ...prev,
      contactDetails: updatedData,
    }));
  };

  const handleAddressSave = (updatedData) => {
    console.log("Address Save Endpoint", updatedData);

    setEmployeeData((prev) => ({
      ...prev,
      address: updatedData,
    }));
  };

  const handleExperienceSave = (updatedData) => {
    console.log("Experience Save Endpoint", updatedData);

    setEmployeeData((prev) => ({
      ...prev,
      experience: updatedData,
    }));
  };

  const handleProfessionalSummarySave = (updatedData) => {
    console.log("Professional Summary Save Endpoint", updatedData);

    setEmployeeData((prev) => ({
      ...prev,
      professionalSummary: updatedData,
    }));
  };

  const handleEducationSave = (updatedData) => {
    console.log("Education Save Endpoint", updatedData);

    setEmployeeData((prev) => ({
      ...prev,
      education: updatedData,
    }));
  };

  const handleIdentitySave = (updatedData) => {
    console.log("Identity Information Save Endpoint", updatedData);

    setEmployeeData((prev) => ({
      ...prev,
      identityInformation: updatedData,
    }));
  };

  return (
    <div className={styles.page}>
      <ProfileProgress progress={employeeData.completion} />

      <div className={styles.gridLayout}>
        <PrimaryDetailsCard
          data={employeeData.primaryDetails}
          onSave={handlePrimarySave}
        />

        <ContactDetailsCard
          data={employeeData.contactDetails}
          onSave={handleContactSave}
        />

        <AddressCard
          data={employeeData.address}
          onSave={handleAddressSave}
        />

        <ExperienceCard
          data={employeeData.experience}
          onSave={handleExperienceSave}
        />

        <ProfessionalSummaryCard
          data={employeeData.professionalSummary}
          onSave={handleProfessionalSummarySave}
        />

        <EducationCard
          data={employeeData.education}
          onSave={handleEducationSave}
        />

        <IdentityInformationCard
          data={employeeData.identityInformation}
          onSave={handleIdentitySave}
        />
      </div>
    </div>
  );
}

// =========================
// REUSABLE COMPONENTS
// =========================

function ProfileProgress({ progress = 0 }) {
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressHeader}>
        <div className={styles.progressInner}>
          <p className={styles.value}>Incomplete profile</p>

          <div className={styles.progressBarBg}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className={styles.progressPercent}>{progress}%</p>
        </div>

        <p className={styles.noteText}>
          * All fields marked in red color below are mandatory
        </p>
      </div>
    </div>
  );
}

function ProfileCard({ title, isEditing, onEdit, onSave, onCancel, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>

        <div>
          {isEditing ? (
            <>
              <button onClick={onSave} className={styles.saveButton}>
                Save
              </button>
              <button onClick={onCancel} className={styles.cancelButton}>
                Cancel
              </button>
            </>
          ) : (
            <button onClick={onEdit} className={styles.editButton}>
              Edit
            </button>
          )}
        </div>
      </div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value || "-Not Set-"}</p>
    </div>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

// =========================
// CARD COMPONENTS
// =========================

function PrimaryDetailsCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  return (
    <ProfileCard
      title="Primary Details"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
      onSave={handleSave}
      onCancel={handleCancel}
    >
      {isEditing ? (
        <div className={styles.cardBodyGrid}>
          <InputField label="First Name" name="firstName" value={formData?.firstName} onChange={handleChange} />
          <InputField label="Middle Name" name="middleName" value={formData?.middleName} onChange={handleChange} />
          <InputField label="Last Name" name="lastName" value={formData?.lastName} onChange={handleChange} />
          <InputField label="Display Name" name="displayName" value={formData?.displayName} onChange={handleChange} />
          <InputField label="Gender" name="gender" value={formData?.gender} onChange={handleChange} />
          <InputField label="DOB" name="dob" value={formData?.dob} onChange={handleChange} />
        </div>
      ) : (
        <div className={styles.cardBodyGrid}>
          <ProfileField label="First Name" value={data?.firstName} />
          <ProfileField label="Middle Name" value={data?.middleName} />
          <ProfileField label="Last Name" value={data?.lastName} />
          <ProfileField label="Display Name" value={data?.displayName} />
          <ProfileField label="Gender" value={data?.gender} />
          <ProfileField label="DOB" value={data?.dob} />
        </div>
      )}
    </ProfileCard>
  );
}

function ContactDetailsCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  return (
    <ProfileCard
      title="Contact Details"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
      onSave={handleSave}
      onCancel={handleCancel}
    >
      {isEditing ? (
        <div className={styles.cardBodyGrid}>
          <InputField label="Work Email" name="workEmail" value={formData?.workEmail} onChange={handleChange} />
          <InputField label="Personal Email" name="personalEmail" value={formData?.personalEmail} onChange={handleChange} />
          <InputField label="Mobile" name="mobile" value={formData?.mobile} onChange={handleChange} />
          <InputField label="Work Phone" name="workPhone" value={formData?.workPhone} onChange={handleChange} />
        </div>
      ) : (
        <div className={styles.cardBodyGrid}>
          <ProfileField label="Work Email" value={data?.workEmail} />
          <ProfileField label="Personal Email" value={data?.personalEmail} />
          <ProfileField label="Mobile" value={data?.mobile} />
          <ProfileField label="Work Phone" value={data?.workPhone} />
        </div>
      )}
    </ProfileCard>
  );
}

function AddressCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  return (
    <ProfileCard
      title="Address"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
      onSave={handleSave}
      onCancel={handleCancel}
    >
      {isEditing ? (
        <div className={styles.cardBodyGrid}>
          <InputField label="City" name="city" value={formData?.city} onChange={handleChange} />
          <InputField label="State" name="state" value={formData?.state} onChange={handleChange} />
          <InputField label="Country" name="country" value={formData?.country} onChange={handleChange} />
          <InputField label="Pincode" name="pincode" value={formData?.pincode} onChange={handleChange} />
        </div>
      ) : (
        <div className={styles.cardBodyGrid}>
          <ProfileField label="City" value={data?.city} />
          <ProfileField label="State" value={data?.state} />
          <ProfileField label="Country" value={data?.country} />
          <ProfileField label="Pincode" value={data?.pincode} />
        </div>
      )}
    </ProfileCard>
  );
}

function ExperienceCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  return (
    <ProfileCard
      title="Experience"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
      onSave={handleSave}
      onCancel={handleCancel}
    >
      {isEditing ? (
        <InputField
          label="Experience"
          name="experience"
          value={formData?.experience}
          onChange={handleChange}
        />
      ) : (
        <p className={styles.value}>{data?.experience || "-Not Set-"}</p>
      )}
    </ProfileCard>
  );
}

function ProfessionalSummaryCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  return (
    <ProfileCard
      title="Professional Summary"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
      onSave={handleSave}
      onCancel={handleCancel}
    >
      {isEditing ? (
        <InputField
          label="Summary"
          name="summary"
          value={formData?.summary}
          onChange={handleChange}
        />
      ) : (
        <p className={styles.subText}>{data?.summary || "-Not Set-"}</p>
      )}
    </ProfileCard>
  );
}

function EducationCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  return (
    <ProfileCard
      title="Education"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
      onSave={handleSave}
      onCancel={handleCancel}
    >
      {isEditing ? (
        <InputField
          label="Education"
          name="education"
          value={formData?.education}
          onChange={handleChange}
        />
      ) : (
        <p className={styles.value}>{data?.education || "-Not Set-"}</p>
      )}
    </ProfileCard>
  );
}

function IdentityInformationCard({ data, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  return (
    <ProfileCard
      title="Identity Information"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
      onSave={handleSave}
      onCancel={handleCancel}
    >
      {isEditing ? (
        <div className={styles.cardBodyGrid}>
          <InputField label="Aadhar" name="aadhar" value={formData?.aadhar} onChange={handleChange} />
          <InputField label="PAN" name="pan" value={formData?.pan} onChange={handleChange} />
        </div>
      ) : (
        <div className={styles.cardBodyGrid}>
          <ProfileField label="Aadhar" value={data?.aadhar} />
          <ProfileField label="PAN" value={data?.pan} />
        </div>
      )}
    </ProfileCard>
  );
}