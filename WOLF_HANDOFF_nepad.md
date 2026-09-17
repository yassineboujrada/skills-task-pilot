# Wolf Handoff — AUDA-NEPAD Exercise Prototype

## Assignment context

The assigned exercise client is **AUDA-NEPAD**. This is a fictional hackathon exercise and does not imply that AUDA-NEPAD commissioned or endorsed the prototype. The target users are skills programme planners working with employers, training providers, Member State teams, regional economic communities, and other partners.

The interface uses AUDA-NEPAD’s public organisational context as a design reference: Agenda 2063, regional integration, technical assistance, knowledge-based advisory support, capacity strengthening, and coordination across stakeholders. Reference: [AUDA-NEPAD — Who We Are](https://www.nepad.org/who-we-are).

## Accessible preview

[Open the clickable AUDA-NEPAD exercise preview](manus-webdev://694c7f0f)

**What the user can do in one sentence:** A skills programme planner can inspect a partner task, review the supporting evidence, generate a focused technical-assistance intervention, correct or approve it, and inspect the uncertainty case before a regional pilot.

**What is simulated:** The partner event is simulated, all records are synthetic, the Skills Bank/LMS data is not connected, and the approver role is represented by the person clicking the prototype.

## Concrete client-fit design choice

The prototype replaces generic commercial wording with an AUDA-NEPAD-aligned coordination vocabulary. For example, the navigation uses **Regional pilots**, **Partner signals**, and **Evidence & decisions**, while the proposal is framed as a **focused technical-assistance intervention** owned by a Member State delivery team.

This serves the target users because a programme planner is coordinating across employers, providers, Member State teams, and regional partners. The wording keeps the decision about programme delivery and capacity strengthening rather than implying a learner-ranking or recruitment product.

The visual treatment uses a deep green workspace with warm gold accents and a restrained, document-like evidence layout. This is an exercise interpretation of the public reference, not an official AUDA-NEPAD brand reproduction.

## Problem and demonstrated outcome

The prototype addresses the gap between a partner describing work that is difficult to deliver and a training provider offering a course. It demonstrates a narrow workflow that turns one partner task into an observable learning test. The output is a proposed intervention that a programme planner can inspect, correct, and approve for a regional pilot.

The prototype does **not** rank learners, make a hiring decision, certify competence, or claim that attending a module proves a learner can perform the task.

## Next integration point

The next integration should connect the **partner task intake/event source** to the **provider’s learning-module and performance-check records**.

The first production-shaped integration is:

1. Receive a task or requirement change from an employer, Member State team, REC, or partner intake form.
2. Map the task to a controlled set of required capabilities.
3. Compare those capabilities with the training provider’s module coverage.
4. Create a proposal for an observable performance check.
5. Send the proposal to the programme planner and relevant partner contact for approval or correction.
6. Receive the provider’s assessment result and attach it to the evidence trail.

A real Skills Bank API may provide useful contextual capability data, but it should not be treated as proof that a learner can perform the task. A real LMS or provider system is required for module delivery and performance-check results.

## Ownership

| Area | Proposed owner | Responsibility |
|---|---|---|
| Workflow owner | AUDA-NEPAD skills programme planner | Define the decision, coordinate stakeholders, approve or correct proposals, and choose the next pilot case. |
| Partner integration | Employer/Member State/REC partnership lead | Provide one real task and a reliable change-event source. |
| Provider integration | Training provider product/data owner | Provide module coverage and return the performance-check result. |
| Capability vocabulary | Skills Bank or curriculum owner | Confirm the mapping from partner language to controlled capabilities. |
| Prototype/product engineering | Product engineer | Replace local state with persistence, APIs, audit logging, and access control. |

## Access and data required

The next validation requires one real partner task, permission to use the task for a controlled pilot, the participating provider’s module metadata, and one agreed performance-check format. The team also needs an owner for the incoming task-change event and an owner for returning the provider result.

The minimum data contract should include:

- Task identifier and partner-provided description
- Required capability or skill statements
- Evidence source and timestamp
- Provider module identifier and covered capabilities
- Proposed observable outcome
- Human decision, editor, timestamp, and correction note
- Performance-check result and evidence attachment

## Unresolved risks

The highest unresolved risk is whether the proposed observable check is feasible for a provider to deliver and meaningful to the partner or Member State team. A capability match alone is not sufficient evidence of work performance.

Other unresolved risks are ambiguity in partner language, inconsistent module metadata, quality and comparability of provider assessment results, permissions for cross-border programme data, and the danger that a confidence score could be mistaken for learner competence.

The system should preserve uncertainty and route weak matches to clarification rather than silently generating a confident recommendation.

## Next real validation case

Test one partner task with one training provider and one programme planner. Ask the partner to describe the task and its success signal. Ask the planner to approve or correct the proposed observable check. Have the provider run the check with one pilot learner, then ask the partner whether the evidence is relevant to the original delivery problem.

Measure:

- Time from partner task to approved intervention
- Number of corrections required before approval
- Whether the provider can deliver the check within the agreed time
- Whether the partner recognises the result as useful evidence
- Whether any claim about competence remains unsupported

## Current prototype boundary

The current prototype uses client-side state and synthetic records. The incoming partner event is a button-triggered simulation. The evidence view is inspectable but not connected to a live Skills Bank or LMS. The approval state is visible in the interface but is not persisted to a production database.

## Email-ready response to Yassine

> Received — thank you. The accessible preview is here: [AUDA-NEPAD exercise preview](manus-webdev://694c7f0f). In one sentence, a skills programme planner can inspect a partner task, generate a focused technical-assistance intervention, correct or approve it, and prepare a regional pilot. The partner event, records, and Skills Bank/LMS data are simulated or synthetic; there is no live external integration yet. One concrete client-fit choice is the use of Regional pilots, Partner signals, and Evidence & decisions, with the proposal framed as technical assistance for Member State delivery teams. The Wolf handoff includes the next integration, owner, unresolved risks, and next validation case. This is a fictional exercise prototype and does not imply AUDA-NEPAD endorsement.
