'use client'

import { Page } from '@/shared/components/page'
import { Container } from '@/shared/components/ui/container'
import { Button, Placeholder, Steps } from '@telegram-apps/telegram-ui'
import { initData, useSignal } from '@telegram-apps/sdk-react'
import { useRouter } from 'next/navigation'
import { useRegistration } from '@/store/registration/registration.store'

export default function Registration() {
  const initDataState = useSignal(initData.state)
  const router = useRouter()

  const { currentStep, profileData, steps, setProfileData, prevStep, nextStep } = useRegistration()
  const currentStepName = steps[currentStep]

  const handleNext = () => {
    if (currentStep >= 3) {
      alert('Profile Completed')
      router.push('/home')
    } else {
      nextStep()
    }
  }

  const handlePrev = () => {
    prevStep()
  }

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ]

  return (
    <Page back={false}>
      <Container>

        {currentStepName === 'Welcome' &&
          <div className={''}>
            <Placeholder
              action={
                <Button onClick={() => handleNext()} size="l" stretched>{`Let's start`}</Button>
              }
              header="Welcome"
              description={`@${initDataState?.user?.username}`}
            >
              <img
                alt="Telegram sticker"
                className="blt0jZBzpxuR4oDhJc8s"
                src="https://xelene.me/telegram.gif"
              />
            </Placeholder>
          </div>
        }

        {currentStepName === 'Name' &&
          <div className={''}>
            <Placeholder
              action={
              <>
                <Button onClick={() => handleNext()} size="l" stretched>Continue</Button>
                <Button onClick={() => handlePrev()} mode={'outline'} size="l" stretched>Previous</Button>
              </>
              }
              header="Your Name"
              description={`@${initDataState?.user?.username}`}
            >
              <img
                alt="Telegram sticker"
                className="blt0jZBzpxuR4oDhJc8s"
                src=""
              />
            </Placeholder>
          </div>
        }

        {currentStepName === 'Age' &&
          <div className={''}>
            <Placeholder
              action={
                <>
                  <Button onClick={() => handleNext()} size="l" stretched>Continue</Button>
                  <Button onClick={() => handlePrev()} mode={'outline'} size="l" stretched>Previous</Button>
                </>
              }
              header="Your Age"
              description={`@${initDataState?.user?.username}`}
            >
              <img
                alt="Telegram sticker"
                className="blt0jZBzpxuR4oDhJc8s"
                src=""
              />
            </Placeholder>
          </div>
        }

        {currentStepName === 'Gender' &&
          <div className={''}>
            <Placeholder
              action={
                <>
                  <Button onClick={() => handleNext()} size="l" stretched>Continue</Button>
                  <Button onClick={() => handlePrev()} mode={'outline'} size="l" stretched>Previous</Button>
                </>
              }
              header="Your Gender"
              description={`@${initDataState?.user?.username}`}
            >
              <img
                alt="Telegram sticker"
                className="blt0jZBzpxuR4oDhJc8s"
                src=""
              />
            </Placeholder>
          </div>
        }

        <Steps
          count={steps.length + 1}
          progress={currentStep + 1}
        />
      </Container>
    </Page>
  )
}
