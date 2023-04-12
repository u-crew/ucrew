# Package manager

- Yarn is being used by Uday Korlimarla (ucrew)

# Docker 

- Tag - ucrew/ucrew:<tag>
- Loing with Snyk SSO to check the private repo on Docker hub.
- Default port exposed is 3000. Map this on host when spinning new instance to your choice.


# Framework

- React 18 + NextJS (Template being used).
- Same template was tested with Stackhawk.
- Same is on Snyk org ucrew (Group: Uday Korlimarla's Group).


# Ideation

1. Start with low vulns and verify False-Positives on Snyk group.
2. Fix where possible and remove FPs if any.
3. Create new vulns.
4. Verify.
5. Fix.
6. Verify and check for fast scans.
7. Introduce the vulns again.
8. Keep a PR fix ready.
9. Deploy to AWS eu-west-1 (Ireland). AWS for CSG account usage.