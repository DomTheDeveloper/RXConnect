# [MedSync](https://devpost.com/software/medsync-android)

![Logo](https://res.cloudinary.com/devpost/image/fetch/s--IXrklzQJ--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://i.imgur.com/2EThUDs.png)

### Enter MedSync.

MedSync is a comprehensive cloud-based solution to fragmented information systems and inefficient methods of communication. It helps the physician, the pharmacist, and the patient take advantage of a digitized prescription model.

### MedSync has three key parts.

**The Server**

The doctor, pharmacist, patient, and prescription information is stored in a Mongo database on a Linode instance. The patients' info is provided by the EPIC FIHR health API. The backend API uses NodeJS and Express to expose the methods that the interfaces need to interact with the database.

**The Web App**

Doctors use this interface to manage their patients and write prescriptions. They can view their patients' info and assess their data on the fly to help give a more accurate diagnosis. When creating a prescription, the doctor can use text expansion to easily add more detailed notes.

```
input: TAKE 1 TAB QD HS
output: TAKE 1 TABLET ONCE DAILY AT BEDTIME
```

**The Android App**

The patient downloads the app to help them keep track of their medications. Their prescriptions are automatically synced when they are added through the doctor interface. The doctor's directions are parsed to determine reminder times for the patient, which are implemented as push notifications. The patient can also see the contact info for their doctor and pharmacist, and call with one tap.
