import os
from requests.exceptions import RequestException

from hfc.fabric import Client
from hfc.fabric_ca.caservice import CAClient, Enrollment, CAService
from hfc.util.crypto.crypto import ecies

with open(os.path.join(os.path.dirname(__file__),
                       "../fixtures/ca/enroll-csr.pem")) as f:
    test_pem = f.read()

ENROLLMENT_ID = "admin"
ENROLLMENT_SECRET = "adminpw"

private_key = ecies().generate_private_key()

class firstTest():
    def setUp(self):
        cli = Client('/etc/channel-info/network.json')
        doctors_admin = cli.get_user(org_name='doctors.treeconnector.com', name='Admin')

    def setCA(self,new_username,CA_ip_port):
        casvc = ca_service(target="http://"+CA_ip_port)
        adminEnrollment = casvc.enroll(ENROLLMENT_ID, ENROLLMENT_SECRET) # now local will have the admin enrollment
        secret = adminEnrollment.register(new_username) # register a user to ca
        user1Enrollment = casvc.enroll(new_username, secret) # now local will have the user enrollment
        user1ReEnrollment = casvc.reenroll(user1Enrollment) # now local will have the user reenrolled object
        RevokedCerts, CRL = adminEnrollment.revoke(new_username) # revoke the user if you need
